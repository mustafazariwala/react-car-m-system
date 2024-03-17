import CarCard from '../components/CarCard'

const getTickets = async () => {
  try {
    const results = await fetch("http://127.0.0.1:3000/api/Cars", {
      cache: "no-store"
    })
    return results.json()
  } catch (err) {
    console.log("Failed to fetch data", err)
  }
}
const Dashboard = async () => {
  const { cars } = await getTickets();
  const uniqueCategories = [...new Set(cars?.map(({category}) => category))];
  const testArr = [{name:'Product1'}, {name:'Product2'}, {name:'Product3'}]
  return (
    <div className='p-5'>
      <div>
        {uniqueCategories?.map((uniqueCategory, catIndex) => 
          <div key={uniqueCategory} className="mb-4">
            <h3>{uniqueCategory}</h3>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4">
              {cars.filter(car => car.category == uniqueCategory).map((filteredcar, _index) => 
                <CarCard id={_index} key={_index} car={filteredcar}/>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
