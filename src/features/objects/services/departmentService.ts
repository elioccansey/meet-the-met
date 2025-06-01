import api from "../../../common/api"

const ALL_DEPARTMENTS_URL = "/departments"

export const getDepartements = async () => {
    const response = await api.get(ALL_DEPARTMENTS_URL)
    return response.data
}