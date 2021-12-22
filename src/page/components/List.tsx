/*--------------------COMPONENTS--------------------*/
import styled from "styled-components";
import Text from "../../components/Text";
import Badge, { BadgeButton } from "../../components/Badge";

/*--------------------INTERFACE--------------------*/
import { JobListingProps } from "../Home";

function List(props: JobListingProps) {
  const { items, onAddFilter } = props;

  return (
    <Container>
      {items.map((item) => (
        <Card key={item.id} isFeature={item.featured}>
          <CardContent>
            <Box className="detail-box">
              <Box>
                <Img src={process.env.PUBLIC_URL + item.logo} alt="" />
              </Box>
              <Box className="title-box">
                <Text fontWeight={700} color="hsl(180, 29%, 50%)">
                  {item.company}
                  {item.new && (
                    <Badge
                      className="new-badge"
                      primaryColor="hsl(180, 29%, 50%)"
                    >
                      <Text color="#fff" fontWeight={700} size={10}>
                        NEW!
                      </Text>
                    </Badge>
                  )}
                  {item.featured && (
                    <Badge primaryColor="#333333">
                      <Text color="#fff" fontWeight={700} size={10}>
                        FEATURED
                      </Text>
                    </Badge>
                  )}
                </Text>
                <Text fontWeight={700}>{item.position}</Text>
                <Text color="hsl(180, 8%, 52%)">{`${item.postedAt} • ${item.contract} • ${item.location}`}</Text>
              </Box>
            </Box>
            <Line />
            <Box className="tag-box">
              {[item.role, item.level, ...item.languages, ...item.tools].map(
                (value, index) => (
                  <BadgeButton
                    key={index}
                    primaryColor="hsl(180, 52%, 96%)"
                    secondaryColor="hsl(180, 29%, 50%)"
                    onClick={(): void => onAddFilter(value)}
                  >
                    {value}
                  </BadgeButton>
                )
              )}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

/*-------------------Style-------------------*/
const Container = styled.div`
  margin: 1rem 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (min-width: 840px) {
    gap: 1.5rem;
  }
`;

const Card = styled.div<{ isFeature: boolean }>`
  padding: 0rem 1.5rem 0rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: #5ba4a461 0px 2px 15px 1px;
  position: relative;
  ::before {
    content: "";
    width: ${(props) => (props.isFeature ? "6px" : "0px")};
    height: 100%;
    background-color: hsl(180, 29%, 50%);
    border-radius: 1rem 0 0 1rem;
    position: absolute;
    inset: 0;
    z-index: 100;
  }
  @media (min-width: 840px) {
    padding: 2rem 2.5rem;
  }
`;

const CardContent = styled.div`
  transform: translateY(-25px);
  @media (min-width: 840px) {
    transform: none;
    display: flex;
    justify-content: space-between;
  }
`;

const Box = styled.div`
  &.detail-box {
    margin-bottom: 1rem;
    .title-box {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      .new-badge {
        margin: 0 0.5rem 0 1rem;
      }
    }
  }

  &.tag-box {
    margin: 1rem 0 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 840px) {
    &.detail-box {
      margin-bottom: 0rem;
      display: flex;
      align-items: center;
      .title-box {
        margin: 0 0 0 1rem;
      }
    }
    &.tag-box {
      margin: 0 0 0 1rem;
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1rem;
    }
  }
`;

const Line = styled.div`
  height: 1px;
  background-color: #888888;
  @media (min-width: 840px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 50px;
  @media (min-width: 840px) {
    width: auto;
  }
`;

export default List;
