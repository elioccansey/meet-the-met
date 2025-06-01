import { Button } from "@/components/ui/button"
import { ObjectType } from "@/features/objects/types/ObjectType"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"

const ObjectDetails = () => {

    const location = useLocation() || {}
    const { objectItem } = location.state as { objectItem: ObjectType }
    const { primaryImage, title, department, artistDisplayName } = objectItem
    console.log(objectItem)

    return (
        <main className="flex flex-col items-center">
            <h1>{title}</h1>
            <div className="mt-6">
                <p>Department : {department} </p>
                <p>Artist : {artistDisplayName} </p>
            </div>
            {
                primaryImage && <div className="mt-8">
                    <img src={primaryImage} className="w-128" alt={title} />
                </div>
            }

            <Link to={"/"} className="mt-8"> <Button>Back home</Button></Link>

        </main>
    )
}

export default ObjectDetails