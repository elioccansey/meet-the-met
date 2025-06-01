import { Link } from 'react-router-dom'
import { ObjectType } from '../../types/ObjectType'
import ObjectItem from '../ObjectItem'

type ObjectListProps = {
    objects: ObjectType[]
}

const ObjectList = ({ objects }: ObjectListProps) => {
    return (
        <>
            {objects.length > 0 && objects.map((objectItem) => (
                <Link key={objectItem.objectID} to={`objects/${objectItem.objectID}`} state={{ objectItem }}>
                    <ObjectItem objectItem={objectItem} />
                </Link>
            ))}
        </>
    )
}

export default ObjectList