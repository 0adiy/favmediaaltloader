import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { IconButton, Card, CardActions, CardContent, CardMedia, Tooltip, Typography, Zoom } from "@mui/material";

export function MCard(props) {
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia component="img" src={`${props.url}?w=248&fit=crop&auto=format`} srcSet={`${props.url}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={props.name} />
      <CardContent sx={{ padding: 1 }}>
        <Typography noWrap gutterBottom="false" variant="h5" component="div">
          {props.name}
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

export function VCard(props) {
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia component="video" src={`${props.url}?w=248&fit=crop&auto=format`} srcSet={`${props.url}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={props.name} controls />
      <CardContent sx={{ padding: 1 }}>
        <Typography noWrap gutterBottom="false" variant="h5" component="div">
          {props.name}
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
