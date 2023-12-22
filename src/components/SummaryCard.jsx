
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';

export const SummaryCard = ({ title,content}) => {
    return (
        <div>
            <Grid
            container
            margin={'100px 0px 20px 0px'}
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '10vh' }}
            overflow="auto"
          >
            <Grid item xs={3} style={{margin: "3em"}}>
              <Card sx={{ minWidth: 500, maxWidth: 1000, borderRadius: '10px' }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ background: 'grey', borderRadius: '10px' }}>
                    {title}
                  </Typography>
                  <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                    {content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
    )
}