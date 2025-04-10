import { useEffect, useState } from "react";
import { IGenericResponsePagination } from "@/types/service.type";
import {Pagination} from "@/types/app.type";

export const usePagination = <T>({
  setData,
  dataCallerAction,
  data,
  initPagination,
}: {
  data: T[];
  setData: (value: T[]) => void;
  dataCallerAction: (
    page: number,
  ) => Promise<IGenericResponsePagination<T[], Pagination>>;
  initPagination?: Pagination;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFetchSpecificPage = async (page: number) => {
    try {
      setLoading(true);
      const res = await dataCallerAction(page);
      setData(res.data);
      setPagination(res.pagination);
      setCurrentPage(page);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (initPagination) {
        setPagination(initPagination);
        return;
      }
      try {
        setLoading(true);
        const res = await dataCallerAction(currentPage);
        setData(res.data);
        setPagination(res.pagination);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleFetchNextPage = async () => {
    if (currentPage === pagination?.totalPages) return;
    await handleFetchSpecificPage(currentPage + 1);
  };

  const handleFetchPreviousPage = async () => {
    if (currentPage === 1) return;
    await handleFetchSpecificPage(currentPage - 1);
  };

  return {
    pagination,
    setPagination,
    loading,
    data,
    setData,
    handleFetchSpecificPage,
    handleFetchNextPage,
    handleFetchPreviousPage,
    currentPage,
  } as const;
};
