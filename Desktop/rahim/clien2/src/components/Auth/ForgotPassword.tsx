import Input from './Input'
import { ForgotPasswordProps } from './types'

function FogotPassword({ setUiState, onChange, forgotPassword }:ForgotPasswordProps) {
  return (
    <>
      <p className="text-3xl font-black">Reset password</p>
      <div className="mt-10">
        <label className="text-sm">Email</label>
        <Input onChange={onChange} name="email" />
      </div>
      <button
        onClick={() => forgotPassword()}
        className="text-white w-full mt-4 bg-pink-600 p-3 rounded">
        Continue
      </button>
      <button
      onClick={() => setUiState('signIn')}
      className="text-sm mt-6 text-pink-500">Cancel</button>
    </> 
  )
}

export default FogotPassword