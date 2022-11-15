import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { border, color } from '@mui/system';
import Divider from '@mui/material/Divider';
import { green, grey, red } from '@mui/material/colors';
import { colors } from '@mui/material';


export default function offerDetail() {
  return (
    <div>
      {/* Total Price  */}
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
      >
        <Card sx={{
          width: 374,
          mr: 6,
          mt: 5,
          borderRadius: 3
        }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Price Details
            </Typography>
            <Divider />
            <Typography variant="h6" component="div">
              Passenger
            </Typography>
            <Grid container>
              <Grid item xs={5}>
                Adult
              </Grid>
              <Grid item xs={5}>
                THB 220 x 1
              </Grid>
              <Grid item xs={5}>
                Gas cost
              </Grid>
              <Grid item xs={5}>
                THB 200 x 1
              </Grid>
              <Grid item xs={5}>
                Service Charge
              </Grid>
              <Grid item xs={5}>
                THB 20 x 1
              </Grid>
            </Grid>
            <Typography variant="h6" component="div">
              <Grid container>
                <Grid item xs={5}>
                  Total Price
                </Grid>
                <Grid item xs={5}>
                  THB 220
                </Grid>
              </Grid>
            </Typography>
            <Divider />
          </CardContent>
          <CardActions>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Button variant="contained">Booking</Button>
            </Grid>
          </CardActions>
        </Card>
      </Grid>

      {/* Description */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Card sx={{
          width: 896,
          mr: 6,
          mt: 5,
        }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Description
            </Typography>
            <Typography variant="h7" component="div">
              Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentence is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Driving History */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Card sx={{
          width: 896,
          mr: 6,
          mt: 5,
        }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Driving History
            </Typography>
            <Card sx={{
              width: 863,
              mr: 6,
              mt: 3,
              backgroundColor: colors.grey[400]
            }}>
              <CardContent>
                <Grid container>
                  <Grid item xs={3}>
                    Date
                  </Grid>
                  <Grid item xs={3}>
                    Origin
                  </Grid>
                  <Grid item xs={3}>
                    Destination
                  </Grid>
                  <Grid item xs={3}>
                    Seat
                  </Grid>
                  <Grid item xs={3}>
                    2 Nov 2022
                  </Grid>
                  <Grid item xs={3}>
                    Mae Fah Luang University
                  </Grid>
                  <Grid item xs={3}>
                    Central Plaza Chiang Rai
                  </Grid>
                  <Grid item xs={3}>
                    1
                  </Grid>
                  <Grid item xs={4}>
                    Carbrand
                  </Grid>
                  <Grid item xs={4}>
                    License plate number
                  </Grid>
                  <Grid item xs={4}>
                    Price/Seat
                  </Grid>
                  <Grid item xs={4}>
                    Mitsubishi
                  </Grid>
                  <Grid item xs={4}>
                    กขค 123 เชียงราย
                  </Grid>
                  <Grid item xs={4}>
                    THB 220
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}
