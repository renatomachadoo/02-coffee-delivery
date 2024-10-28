import { Icon } from "@phosphor-icons/react";
import { BackgroundIconContainer, BackgroundProps} from "./styles";

interface BackgroundIconProps extends BackgroundProps {
    icon: Icon
}

export function BackgroundIcon({ backgroundColor, icon : Icon } : BackgroundIconProps){
    return(
        <BackgroundIconContainer backgroundColor={backgroundColor}>
            <Icon size={16} weight="fill" />
        </BackgroundIconContainer>
    )
}