import logoIcon from "../assets/icons/logoIcon.png";

const Logo = () => {
  return (
    <div className="flex gap-3 justify-center items-center h-full">
    <img
      src={logoIcon}
      alt="Logo Icon"
      className="w-[37.02px] h-[49.41px]"
    />
    <h1 className="text-custom-blue text-3xl">everlearn</h1>
  </div>
  )
}

export default Logo