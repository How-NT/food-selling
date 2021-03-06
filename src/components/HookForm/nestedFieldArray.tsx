import React, { FC } from 'react'
import { useFieldArray } from 'react-hook-form'

const NestedArray: FC<any> = ({ nestIndex, control, register }: any) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `test[${nestIndex}].nestedArray`
  })

  return (
    <div>
      {fields.map((item: any, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <label>Nested Array:</label>
            <input
              name={`test[${nestIndex}].nestedArray[${k}].field1`}
              ref={register({ required: true })}
              defaultValue={item.field1}
              style={{ marginRight: '25px' }}
            />

            <input
              name={`test[${nestIndex}].nestedArray[${k}].field2`}
              ref={register()}
              defaultValue={item.field2}
            />
            <button type="button" onClick={() => remove(k)}>
              Delete Nested
            </button>
          </div>
        )
      })}

      <button
        type="button"
        onClick={() =>
          append({
            field1: 'field1',
            field2: 'field2'
          })
        }
      >
        Append Nested
      </button>

      <hr />
    </div>
  )
}

export default NestedArray
