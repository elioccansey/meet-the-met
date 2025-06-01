import { useQueries, useQuery } from "@tanstack/react-query";
import { getObjectById, getObjectIds, searchObjects } from "../services/objectService";
import { SearchParamsType } from "../types/SearchParamsType";

export const useGetObjectIds = () => {
    return useQuery({
        queryKey: ["objects-ids"],
        queryFn: getObjectIds,
        enabled: true
    })
}

export const useGetObjectById = (objectId: number) => useQuery({
    queryKey: ["object", objectId],
    queryFn: () => getObjectById(objectId),
    enabled: !!objectId
})

export const useGetObjectsByIds = (objectIds: number[]) => {
    return useQueries({
        queries: objectIds.map(objectId => ({
            queryKey: ["object", objectId],
            queryFn: () => getObjectById(objectId),
            enabled: !!objectId
        }))
    })
}

export const useSearchObjects = (searchParams: SearchParamsType) => useQuery({
    queryKey: ["object", searchParams],
    queryFn: () => searchObjects(searchParams),
    enabled: !!searchParams
})
