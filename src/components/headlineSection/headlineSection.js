import { Display2 } from 'baseui/typography'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'

const HeadlineSection = () => {
    return (
        <div>
            <FlexGrid
                flexGridColumnCount={2}
                flexGridColumnGap="scale800"
                flexGridRowGap="scale800"
            >
                <FlexGridItem {...itemProps}>1</FlexGridItem>
                <FlexGridItem {...itemProps}>2</FlexGridItem>
            </FlexGrid>

            <Display2 backgroundColor="redd">
                ΓΡΑΨΕ ΤΗ ΔΙΚΗ ΣΟΥ ΙΣΤΟΡΙΑ ΕΠΙΤΥΧΙΑΣ
            </Display2>
        </div>
    )
}

export default HeadlineSection
