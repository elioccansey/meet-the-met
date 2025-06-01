import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ObjectType } from '../../types/ObjectType'
import { Button } from '@/components/ui/button'

type ObjectItemProps = {
    objectItem: ObjectType
}

const ObjectItem = ({ objectItem }: ObjectItemProps) => {
    const { title, department, primaryImageSmall } = objectItem
    return (
        <Card className="shadow-lg hover:shadow-xl transition duration-300">
            <CardHeader>
                {
                    primaryImageSmall && (<img
                        src={primaryImageSmall}
                        alt={title}
                        className="w-full h-64 object-cover"
                    />)
                }
                <CardTitle className="text-lg font-bold">{title}</CardTitle>
                {department && <CardDescription className="text-sm">by {department}</CardDescription>}
                {/* {artistDisplayName && <CardDescription className="text-sm">by {artistDisplayName}</CardDescription>} */}
            </CardHeader>
            <CardFooter>
                <Button> View </Button>
            </CardFooter>
        </Card>
    )
}

export default ObjectItem