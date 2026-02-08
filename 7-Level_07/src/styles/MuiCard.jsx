import { Card, CardContent, Button, Typography } from "@mui/material";

function MuiCard() {
    
    return (
        <>
            <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                
                <Card sx={{ width: 300, textAlign: "center", p: 2 }}>
                    
                    <CardContent>
                        
                        <Typography variant="h6">User Card</Typography>
                        <Typography>Name: M.Usman Nasir</Typography>
                        <Typography>Email: usmannasir@gmail.com</Typography>
                        <Typography>Using: Material UI</Typography>

                        <Button variant="contained" sx={{ mt: 2 }}>Contact</Button>

                    </CardContent>
      
                </Card>
    
            </div>
        </>
    );

}

export default MuiCard;
