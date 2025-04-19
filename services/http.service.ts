import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import axiosRetry from "axios-retry";
import {
  CacheRequestConfig,
} from "axios-cache-interceptor";
import { jwtDecode } from "jwt-decode";
import * as process from "process";
import { IParams } from "@/types/service.type";

// Simplified token expiration check
const isTokenExpired = (token: string): boolean => {
  if (!token) return true;
  try {
    const { exp } = jwtDecode<{ exp: number }>(token);
    return exp < Date.now() / 1000;
  } catch {
    return true;
  }
};

class HttpService {
  private readonly http: AxiosInstance;
  private readonly baseURL: string;

  constructor(customBaseUrl?: string) {
    this.baseURL = "https://vntranspbackend-production.up.railway.app/v1";

    // Create and configure axios instance
    this.http =
      axios.create({
        baseURL: this.baseURL,
        withCredentials: false,
        timeout: 10000,
      })

    this.injectInterceptors();
  }

  // Get authorization token for requests - placeholder for actual implementation
  private async getAuthorization(): Promise<Record<string, string>> {
    // Implement your token retrieval logic here
    return {};
  }

  // Initialize service configuration
  public service(): HttpService {
    return this;
  }

  // Set up request headers
  private async setupHeaders(
    hasAttachment = false,
    isPublicApi = false,
  ): Promise<AxiosRequestConfig["headers"]> {
    const headers: AxiosRequestConfig["headers"] = {
      "Content-Type": hasAttachment
        ? "multipart/form-data"
        : "application/json",
    };

    if (!isPublicApi) {
      Object.assign(headers, await this.getAuthorization());
    }

    return headers;
  }

  // Generic request method
  private async request<T>(
    method: string,
    url: string,
    options: AxiosRequestConfig | CacheRequestConfig,
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http.request<T>({
        method,
        url,
        ...options,
      });
      return response?.data || ({} as T);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // HTTP methods with improved type safety
  public async get<T>(
    url: string,
    params?: IParams,
    isPublicApi = false,
  ): Promise<T> {
    const headers = await this.setupHeaders(false, isPublicApi);
    return this.request<T>("GET", url, {
      params,
      headers,
      cache: {
        ttl: 0,
        staleIfError: true,
      },
    });
  }

  public async post<T, P = any>(
    url: string,
    payload: P,
    params?: IParams,
    isPublicApi = false,
  ): Promise<T> {
    const isFormData = payload instanceof FormData;
    const headers = await this.setupHeaders(isFormData, isPublicApi);
    return this.request<T>("POST", url, {
      params,
      data: payload,
      headers,
    });
  }

  public async update<T, P = any>(
    url: string,
    payload: P,
    params?: IParams,
    isPublicApi = false,
  ): Promise<T> {
    const isFormData = payload instanceof FormData;
    const headers = await this.setupHeaders(isFormData, isPublicApi);
    return this.request<T>("PATCH", url, {
      params,
      data: payload,
      headers,
    });
  }

  public async put<T, P = any>(
    url: string,
    payload: P,
    params?: IParams,
    isPublicApi = false,
  ): Promise<T> {
    const isFormData = payload instanceof FormData;
    const headers = await this.setupHeaders(isFormData, isPublicApi);
    return this.request<T>("PUT", url, {
      params,
      data: payload,
      headers,
    });
  }

  public async remove<T>(
    url: string,
    params?: IParams,
    isPublicApi = false,
  ): Promise<T> {
    const headers = await this.setupHeaders(false, isPublicApi);
    return this.request<T>("DELETE", url, {
      params,
      headers,
    });
  }

  // Inject interceptors for request and response
  private injectInterceptors(): void {
    // Request interceptor
    this.http.interceptors.request.use(
      async (request) => {
        // Implement token refresh logic here if needed
        return request;
      },
      (error) => Promise.reject(error)
    );

    // Retry logic
    axiosRetry(this.http, {
      retries: 3,
      retryCondition: (error) =>
        axiosRetry.isNetworkOrIdempotentRequestError(error) ||
        error.code === "ECONNABORTED",
      retryDelay: (retryCount) => retryCount * 1000,
    });

    // Response interceptor
    this.http.interceptors.response.use(
      (response) => response,
      (error) => {
        if (!error.response) {
          console.error("Network error:", error.message || "Unknown error");
          return Promise.reject(error);
        }

        const statusCode = error.response.status;

        // Handle specific status codes
        switch (statusCode) {
          case 401:
            console.warn("Unauthorized. Authentication required.");
            break;
          case 403:
            console.warn("Forbidden access");
            break;
          case 500:
            console.error("Internal Server Error");
            break;
        }

        return this.normalizeError(error);
      }
    );
  }

  // Normalize errors
  private normalizeError(error: any): Promise<never> {
    if (axios.isAxiosError(error)) {
      console.error("API Error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    return Promise.reject(error);
  }
}

export { HttpService as default };
