import { CustomPagination } from "@/components/CustomPagination";
import ObjectList from "@/features/objects/components/ObjectList";
import ObjectSearch from "@/features/objects/components/ObjectSearch";
import { ObjectType } from "@/features/objects/types/ObjectType";
import { useMemo, useState } from "react";
import { useDepartements } from "../../features/objects/hooks/useDepartements";
import { useGetObjectIds, useGetObjectsByIds } from "../../features/objects/hooks/useObjects";

const PAGE_SIZE = 5;

const Home = () => {
    const { data, isLoading: isLoadingIds, error: idsError } = useGetObjectIds();

    const { data: departmentsData, isLoading: isLoadingDepartments, error: departmentsError } = useDepartements();
    const [selectedDeparment, setSelectedDeparment] = useState('All departments')
    const [searchString, setSearchString] = useState("")

    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(data?.total / PAGE_SIZE);

    const objectIDs = data?.objectIDs || []
    const pageObjectsIds = objectIDs.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const queries = useGetObjectsByIds(pageObjectsIds);
    const isLoading = queries.some(query => query.isLoading);
    const error = queries.find(query => query.error);

    const objects: ObjectType[] = queries.map(query => query.data).filter(Boolean)

    const filteredObjects = useMemo(
        () => {
            return objects.filter(
                (o) => {
                    const matchedDepartment = (selectedDeparment === "All departments" || o.department === selectedDeparment)
                    const matchedTitle = o.title.toLowerCase().includes(searchString.trim().toLowerCase())
                    const matchedObjectId = o.objectID.toString().toLowerCase() === (searchString.trim().toLowerCase())
                    return matchedDepartment && (matchedTitle || matchedObjectId)
                }
            )
        }
        , [selectedDeparment, searchString, objects]
    )

    if (isLoadingIds) return <div>Loading...</div>;
    if (idsError instanceof Error) return <div>Something went wrong with ids: {idsError.message}</div>;

    if (isLoading) return <div>Loading...</div>;
    if (error instanceof Error) return <div>Something went wrong: {error.message}</div>;

    if (isLoadingDepartments) return <div>Loading...</div>;
    if (departmentsError instanceof Error) return <div>Something went wrong: {departmentsError.message}</div>;

    const departments: [] = departmentsData.departments;

    return (
        <div className="px-4 py-8">
            <ObjectSearch
                selectedDepartment={selectedDeparment}
                departments={departments}
                onDepartmentChange={setSelectedDeparment}
                onSearch={setSearchString}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <ObjectList objects={filteredObjects} />
            </div>

            <CustomPagination
                totalPages={totalPages}
                onChange={setPage}
                currentPage={page}
            />

        </div>
    );
};

export default Home;
