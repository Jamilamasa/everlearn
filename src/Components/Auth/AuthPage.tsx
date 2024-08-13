import AuthForm from './AuthForm'
import AuthLogoSection from './AuthLogoSection'

type Props = { title: "SignUp" | "SignIn" };

const AuthPage = (props: Props) => {
  return (
    <div className="flex h-screen">
        <AuthLogoSection/>
        <AuthForm title={props.title}/>
    </div>
  )
}

export default AuthPage