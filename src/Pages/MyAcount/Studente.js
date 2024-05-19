import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
    return (
        <div className='container'>
            <div className='row mt-4 mt-5'>
                <div className='col-md-6 mt-5'>
                            <div className='student_name'>
                                <h6 className='subName' >م م</h6>

                            </div>
                    <Card sx={{ maxWidth: 345 , position:"relative" }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography className='text-center mt-5' gutterBottom variant="h5" component="div">
                                    محمد محمود
                                </Typography>
                                <div className='container'>
                                    <div className='row'>
                                        <div></div>
                                        <div
                                        style={{
                                            borderBottom:" 0.5px #000 solid",
                                            borderLeft: ".5px #000 solid",
                                        }}
                                        className='col-md-6 mt-2 text-center'>
                                            <GroupIcon/>
                                            <p>hs</p>

                                        </div>
                                        <div
                                        style={{
                                            borderBottom:" .5px #000 solid",
                                        }}
                                        className='col-md-6 mt-2 text-center'>
                                            <StarIcon/>
                                            <p>hs</p>

                                        </div>
                                        <div
                                        style={{
                                            borderLeft: ".5px #000 solid",
                                        }}
                                        className='col-md-6 text-center'>
                                            <CheckIcon className='mt-3'/>
                                            <p>hs</p>

                                        </div>
                                        <div
                                        style={{
                                        }}
                                        className='col-md-6 text-center'>
                                            <HighlightOffIcon  className='mt-3'/>
                                            <p >hs</p>

                                        </div>

                                    </div>

                                </div>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                            style={{
                                backgroundColor: "#F9F9F9",
                                color: "#000",
                            }}
                            className='btn bun-block w-100 mb-2 ' size="" color="primary">
                                تعديل الطالب
                            </Button>
                        </CardActions>
                    </Card>
                </div>

            </div>

        </div>


    );
}
