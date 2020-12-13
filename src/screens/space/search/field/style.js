import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAvoidingView } from 'co/native'

export const Wrap = styled(KeyboardAvoidingView)`
    flex: 1;
`

export const Header = styled(SafeAreaView).attrs({
    edges: ['top', 'left', 'right']
})`
    background: ${({theme})=>theme.background.regular};
    flex-direction: row;
    align-items: center;
`

export const HeaderSearchWrap = styled.View`
    flex: 1;
`