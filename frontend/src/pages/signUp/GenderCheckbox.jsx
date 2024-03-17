import React from 'react'

const GenderCheckbox = ({loading,input, setInput}) => {
  return (
    <div className='flex mt-4'>

      <div className='form-control'>
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-gray-300">
            Male
          </span>
          <input type="radio" name="radio-6" className="radio radio-warning"
          disabled={loading}
          value={"male"}
          onChange={(e) => setInput({...input, gender: e.target.value})} />
        </label>
      </div>

      <div className='form-control'>
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-gray-300">
            Female
          </span>
          <input type="radio" name="radio-6" className="radio radio-warning"
          value={"female"}
          disabled={loading}
          onChange={(e) => setInput({...input, gender: e.target.value})}
          />
        </label>
      </div>

    </div>
  )
}

export default GenderCheckbox