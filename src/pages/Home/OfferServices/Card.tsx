import { Card as MuiCard, styled, Avatar, Typography, CardContent, CardActions, Button } from "@mui/material";

interface ICard {
  avatarSrc: string;
  title: string;
  description: string;
}

export default function Card({ avatarSrc, description, title }: ICard) {
  const handleContinue = () => {};
  return (
    <StyledCard>
      <CardContent>
        <StyledAvatar src={avatarSrc} />

        <Typography variant='h5' mb={2}>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>

      <StyledCardActions>
        <Button onClick={handleContinue}>Continue</Button>
      </StyledCardActions>
    </StyledCard>
  );
}

const StyledCard = styled(MuiCard)(({ theme }) => ({
  width: theme.spacing(48),
}));

const StyledAvatar = styled("img")(({ theme }) => ({
  width: theme.spacing(16),
  height: theme.spacing(16),
  marginBottom: theme.spacing(3),
  background: "#fff",
}));

const StyledCardActions = styled(CardActions)`
  float: right;
`;
