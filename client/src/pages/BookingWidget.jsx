function BookingWidget({ place }) {
  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">
        {' '}
        Price: ${place.price} / 1 night
      </div>
      <div className="border rounded-2xl mt-4">
        <div className=""></div>
        <div className="py-3 px-4 ">
          <label>check-in: </label>
          <input type="date" />
        </div>
        <div className="py-3 px-4 border-l">
          <label>check-out: </label>
          <input type="date" />
        </div>
      </div>
      <div className="py-3 px-4 border-t">
        <label>Number of guests: </label>
        <input type="number" value={1} />
      </div>

      <button className="primary mt-4">Book this place</button>
    </div>
  )
}
export default BookingWidget
