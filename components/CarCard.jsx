import Link from 'next/link'
import DeleteBlock from "./DeleteBlock"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"

import moment from 'moment';

function CarCard({car}) {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-3">
      <div className="flex mb-3">
        <PriorityDisplay priority={car.priority}/>
        <div className="ml-auto">
          <DeleteBlock id={car._id}/>
        </div>
      </div>
      <Link href={`/carPage/${car._id}`} style={{display: "contents"}}>
        <h4>{car.title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{car.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">{moment(car.createdAt).format('DD/MM/YYYY, hh:mm a')}</p>
            <ProgressDisplay progress={car.progress}/>
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={car.status}/>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CarCard
