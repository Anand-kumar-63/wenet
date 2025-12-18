import React from 'react'
import { workspaceSchema } from './Schema'
import Usecreateworkspace from '@/hooks/usecreateworkspace'
import FormGenerator from '@/components/global/form-generator'
import { Button } from '@/components/ui/button'
import { ChartNoAxesColumnDecreasing } from 'lucide-react'
import { Console } from 'console'

// type props = {}
const Createworkspaceform = () => {
    // hook useCreateform()
    // const {register , ispending , onformsubmit , regsiter } = Usecreateworkspace();
    const handlesubmit = async()=>{[
     Console.log("submit")
    ]}
  return (
    <form onSubmit={handlesubmit}
    className='flex flex-col gap-y-3'
    >
      <FormGenerator
      type='text'
      label='Workspace Name'
      inputType='input'
      placeholder='Enter new Workspace name'
      name='workspace name'
      // errors={}
      />
      <Button
      className="w-full text-sm mt-2"
      type="submit"
      disabled={false}
      >
      Create Workspace
      </Button>
    
    </form>
  )
}

export default Createworkspaceform