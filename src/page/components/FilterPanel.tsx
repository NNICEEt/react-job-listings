/*--------------------COMPONENTS--------------------*/
import styled from "styled-components";
import { BadgeButton } from "../../components/Badge";
import Text from "../../components/Text";

interface FilterPanelProps {
  onClear: Function;
  onRemoveItemFiltered: Function;
  itemFiltered: string[];
}

function FilterPanel(props: FilterPanelProps) {
  const { onClear, onRemoveItemFiltered, itemFiltered } = props;

  return (
    <Container isShow={itemFiltered.length > 0}>
      <Box>
        {itemFiltered.map((item) => (
          <BadgeButton
            primaryColor="hsl(180, 31%, 95%)"
            secondaryColor="hsl(180, 29%, 50%)"
            canClose
            onClose={() => onRemoveItemFiltered(item)}
          >
            {item}
          </BadgeButton>
        ))}
      </Box>
      <Text
        className="txt"
        color="hsl(180, 8%, 52%)"
        fontWeight={700}
        onClick={() => onClear()}
      >
        Clear
      </Text>
    </Container>
  );
}

/*-------------------Style-------------------*/
const Container = styled.div<{ isShow: boolean }>`
  min-height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  transform: translateY(-50%);
  box-shadow: #5ba4a461 0px 2px 15px 1px;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  .txt {
    cursor: pointer;
    &:hover {
      color: hsl(180, 29%, 50%);
      text-decoration: underline;
    }
  }
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default FilterPanel;
