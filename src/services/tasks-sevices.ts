import type { Task } from "@/types";
import axiosRequest from "./api";

export const getTasksSevice = async () => {
    const url = "Tasks";
    return await axiosRequest.get(url);
};

export const getTaskSevice = async (id: string) => {
    const url = `Tasks/${id}`
    return await axiosRequest.get(url)
}

export const createTaskSevice =  async (data: Task) => {
    const url = `Tasks/`
    return await axiosRequest.post(url, data)
}

export const updateTaskSevice = async (id: string) => {
    const url = `Tasks/${id}`
    return await axiosRequest.put(url)
}

export const deleteTaskSevice = async (id: string) => {
    const url = `Tasks/${id}`
    return await axiosRequest.delete(url)
}

