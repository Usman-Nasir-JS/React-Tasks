import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f4f6;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  width: 300px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

const Button = styled.button`
  margin-top: 15px;
  background: #3b82f6;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

function StyledCard() {
  
    return (
        <>
            <Wrapper>
                
                <Card>
        
                    <h2>User Card</h2>
                    <p>Name: Name: M.Usman Nasir</p>
                    <p>Email: usmanbinnasir@gmail.com</p>
                    <h3>Using: Styled Components</h3>

                    <Button>Contact</Button>
      
                </Card>

            </Wrapper>
        </>
    );

}

export default StyledCard;
