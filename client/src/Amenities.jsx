function Amenities({ selected, onChange }) {
  return (
    <>
      <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <label className="border p-4 flex rounded-2xl gap-3 items-center">
          <input type="checkbox" />
          <span>WIFI</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-3 items-center">
          <input type="checkbox" />
          <span>Parking</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-3 items-center">
          <input type="checkbox" />
          <span>TV</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-3 items-center">
          <input type="checkbox" />
          <span>Air conditioning</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-3 items-center">
          <input type="checkbox" />
          <span>Hot water</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-3 items-center">
          <input type="checkbox" />
          <span>Essentials</span>
        </label>
      </div>
    </>
  )
}
export default Amenities
