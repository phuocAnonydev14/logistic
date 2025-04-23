"use client"

import type React from "react"

import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {useGetCategories} from "@/hooks/useGetCategories";
import {Category} from "@/types/app.type";
import {appointmentService} from "@/services/appointment.service";
import {toast} from "sonner";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		categoryId: "",
		message: "",
	})
	
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const {data} = useGetCategories({})
	
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const {name, value} = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}
	
	const handleSelectChange = (value: string) => {
		setFormData((prev) => ({
			...prev,
			categoryId: value,
		}))
	}
	
	const handleSubmit = async (e: React.FormEvent) => {
		try {
			e.preventDefault()
			setIsSubmitting(true)
			await appointmentService.makeAppointment(formData)
			// Simulate form submission
			setIsSubmitting(false)
			setIsSuccess(true)
			setFormData({
				name: "",
				email: "",
				phone: "",
				categoryId: "",
				message: "",
			})
			
			toast.success("Gửi thông tin thành công")
			setIsSuccess(false)
		} catch (e) {
			console.log(e)
		}
	}
	
	return (
		<form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
			{isSuccess && (
				<div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
					Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
				</div>
			)}
			
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
				<div>
					<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
						Họ và tên <span className="text-red-600">*</span>
					</label>
					<Input
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						placeholder="Nhập họ và tên"
					/>
				</div>
				
				<div>
					<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
						Email <span className="text-red-600">*</span>
					</label>
					<Input
						id="email"
						name="email"
						type="email"
						value={formData.email}
						onChange={handleChange}
						required
						placeholder="Nhập địa chỉ email"
					/>
				</div>
			</div>
			
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
				<div>
					<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
						Số điện thoại <span className="text-red-600">*</span>
					</label>
					<Input
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						required
						placeholder="Nhập số điện thoại"
					/>
				</div>
				
				<div>
					<label htmlFor="categoryId" className="block text-sm font-medium text-gray-700 mb-1">
						Dịch vụ quan tâm
					</label>
					<Select value={formData.categoryId} defaultValue={data?.[0]?.id.toString()} onValueChange={handleSelectChange}>
						<SelectTrigger>
							<SelectValue placeholder="Chọn dịch vụ"/>
						</SelectTrigger>
						<SelectContent>
							{data?.map((cate: Category, index) => {
								return <SelectItem value={cate.id.toString()} key={cate.id}>{cate.name}</SelectItem>
							})}
						</SelectContent>
					</Select>
				</div>
			</div>
			
			<div className="mb-4">
				<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
					Nội dung <span className="text-red-600">*</span>
				</label>
				<Textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
					placeholder="Nhập nội dung yêu cầu"
					rows={5}
				/>
			</div>
			
			<Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800" disabled={isSubmitting}>
				{isSubmitting ? "Đang gửi..." : "Gửi yêu cầu"}
			</Button>
		</form>
	)
}
