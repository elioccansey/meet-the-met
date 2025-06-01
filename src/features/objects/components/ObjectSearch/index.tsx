import { DepartmentType } from '@/features/objects/types/DepartementType'
import { Input } from '../../../../components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type ObjectSearchProps = {
    selectedDepartment: string;
    onDepartmentChange: (department: string) => void;
    departments: DepartmentType[];
    onSearch: (seachString: string) => void
}

const ObjectSearch = ({ departments, selectedDepartment: selectedDeparment, onDepartmentChange, onSearch, }: ObjectSearchProps) => {

    return (
        <div className="mb-10">
            <form action="#">
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-4">
                    <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                        <Select name="filter-by" value={selectedDeparment}
                            onValueChange={(value: string) => {
                                onDepartmentChange(value)
                            }}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Filter by department" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="All departments" className="font-extralight text-sm">All departments</SelectItem>
                                    {departments.map((d: DepartmentType) => <SelectItem key={d.departmentId} value={`${d.displayName}`}>{d.displayName}</SelectItem>)}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-full sm:w-1/2 flex sm:flex-row gap-2 ">
                        <Input onChange={(e) => {
                            onSearch(e.target.value)
                        }} type="search" placeholder="Search by title or object ID" className="w-full " />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ObjectSearch