import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

type PaginationPropsType = {
    onChange: (page: number) => void;
    currentPage: number;
    totalPages: number
}

const getPagination = (currentPage: number, totalPages: number) => {
    const NUMBER_OF_PAGES_AROUND_CURRENT = 2;
    const pages = []

    for (let i = 1; i <= totalPages; i++) {
        const isAroundCurrentPage = i >= currentPage - NUMBER_OF_PAGES_AROUND_CURRENT && i <= currentPage + NUMBER_OF_PAGES_AROUND_CURRENT
        const isShown = i == 1 || i == totalPages || isAroundCurrentPage
        if (isShown)
            pages.push(i)
        else if (pages[pages.length - 1] !== "...")
            pages.push("...")
    }

    return pages;
}

export function CustomPagination({ onChange, currentPage, totalPages }: PaginationPropsType) {
    const pages = getPagination(currentPage, totalPages)
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={(e) => {
                            e.preventDefault();
                            currentPage > 1 && onChange(currentPage - 1)
                        }}
                    />
                </PaginationItem>

                {
                    pages.map((page, index) => {
                        if (page === "...") return <PaginationEllipsis key={index}>...</PaginationEllipsis>
                        return <PaginationItem key={index}
                            onClick={() => {
                                onChange(parseInt(page.toString()))
                            }}
                        >
                            <PaginationLink isActive={page == currentPage}>
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    })
                }
                <PaginationItem>
                    <PaginationNext
                        onClick={() => {
                            currentPage < totalPages && onChange(currentPage + 1)
                        }}
                    />
                </PaginationItem>

            </PaginationContent>
        </Pagination>
    )
}
