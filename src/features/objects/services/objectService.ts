import api from "../../../common/api";
import { SearchParamsType } from "../types/SearchParamsType";

const OBJECT_IDS_URL = `/objects`
const OBJECT_BY_ID_URL = (id: number) => `/objects/${id}`

export const getObjectIds = async () => {
    const response = await api.get(OBJECT_IDS_URL);
    return response.data;
}

export const getObjectById = async (id: number) => {
    const response = await api.get(OBJECT_BY_ID_URL(id))
    return response.data;
}

export const searchObjects = async (searchParams: SearchParamsType) => {
    const response = await api.get(OBJECT_IDS_URL, { params: searchParams })
    return response.data;
}