import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { IconButton, Card, CardActions, CardContent, CardMedia, Tooltip, Typography, Zoom } from "@mui/material";

function MCard(props) {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="20%"
        src="https://source.unsplash.com/collection/190727/800x600?w=248&fit=crop&auto=format"
        srcSet="https://source.unsplash.com/collection/190727/800x600?w=248&fit=crop&auto=format&dpr=2 2x"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" mb={0}>
          Lizard
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Copy Image Link" arrow>
          <IconButton color="primary" aria-label="Copy Image Link">
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Copy Image" TransitionComponent={Zoom} enterDelay={500} leaveDelay={200}>
          <IconButton color="primary" aria-label="Copy Image">
            <FileCopyIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Remove">
          <IconButton color="primary" aria-label="Remove">
            <DeleteForeverIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default MCard;
