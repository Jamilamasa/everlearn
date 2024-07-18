import AuthForm from "../Components/Auth/AuthForm"
import AuthLogoSection from "../Components/Auth/AuthLogoSection"

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className="flex h-screen">
        <AuthLogoSection/>
        <AuthForm/>
    </div>
  )
}

export default SignUp