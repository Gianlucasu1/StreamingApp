import { Toogle } from "./toogle"
import { Wrapper } from "./wrapper"
import { Recommended } from "./recommended"
import { getRecommended } from "@/lib/recommended-service"


export const Sidebar = async() => {

  const recommended = await getRecommended();

  return (
    <Wrapper>
      <Toogle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  )
}