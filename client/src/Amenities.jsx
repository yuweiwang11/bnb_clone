import PropTypes from 'prop-types'
export default function Amenities({ selected, onChange }) {
  function handleCheckboxClick(e) {
    const { checked, name } = e.target
    if (checked) {
      onChange([...selected, name])
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)])
    }
  }

  return (
    <>
      <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <label className="border p-4 flex rounded-2xl gap-3 items-center">
          <input
            type="checkbox"
            checked={selected?.includes('wifi')}
            name="wifi"
            onChange={handleCheckboxClick}
          />
          <span>WIFI</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-3 items-center">
          <input
            type="checkbox"
            checked={selected?.includes('parking')}
            name="parking"
            onChange={handleCheckboxClick}
          />
          <span>Parking</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-3 items-center">
          <input
            type="checkbox"
            checked={selected?.includes('tv')}
            name="tv"
            onChange={handleCheckboxClick}
          />
          <span>TV</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-3 items-center">
          <input
            type="checkbox"
            checked={selected?.includes('aircon')}
            name="aircon"
            onChange={handleCheckboxClick}
          />
          <span>Air conditioning</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-3 items-center">
          <input
            type="checkbox"
            checked={selected?.includes('hotWater')}
            name="hotWater"
            onChange={handleCheckboxClick}
          />
          <span>Hot water</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-3 items-center">
          <input
            type="checkbox"
            checked={selected?.includes('essentials')}
            name="essentials"
            onChange={handleCheckboxClick}
          />
          <span>Essentials</span>
        </label>
      </div>
    </>
  )
}

// Amenities.propTypes = {
//   selected: PropTypes.node,
//   onChange: PropTypes.node,
// }

// export default Amenities
