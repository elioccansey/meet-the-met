import { useQuery } from "@tanstack/react-query";
import { getDepartements } from "../services/departmentService";

export const useDepartements = () => useQuery({
    queryKey: ['departments'],
    queryFn: getDepartements
})