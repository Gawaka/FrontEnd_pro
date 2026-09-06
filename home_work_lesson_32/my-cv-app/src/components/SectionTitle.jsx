import { Typography, Box } from '@mui/material';


const SectionTitle = ({ title, bgColor}) => (
    <Typography 
    variant="h5" 
    component="h2" 
    fontWeight={700} 
    sx={{ 
        mb: 2,
        display: 'flex', 
        alignItems: 'center', 
        gap: 1.5,
        color: 'text.primary'
    }}
    >
    <Box component="span" sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: bgColor }} />
    {title}
    </Typography>
);

export default SectionTitle;