import logoIcon from "../assets/icons/logoIcon.png";

const Logo = () => {
  return (
    <div>
      <div className="flex gap-3 items-center h-full">
    <img
      src={logoIcon}
      alt="Logo Icon"
      className="w-[37.02px] h-[49.41px]"
    />
    <h1 className="text-custom-blue text-3xl text-blue-800 font-semibold">everlearn</h1>
  </div>
    </div>
  )
}

export default Logo