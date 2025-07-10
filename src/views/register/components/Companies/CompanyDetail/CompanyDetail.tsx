import React from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { get } from 'lodash';
import { useSelector } from 'react-redux';
import { companies } from 'src/redux-modules/companies/Selectors';


const CompanyDetail = () => {
    const params = useParams();
    const companyId = get(params, 'id');
    const companyList = useSelector(companies);

    const listData = get(companyList.company, 'data');
    const companiesList = get(listData, 'data.companies', []);
    const company = companiesList.find((item: any) => item.id === companyId); //eslint-disable-line

    return (
        <Box className="bg-[#d1e8ec] mt-4 rounded-3xl">
            <Box className="flex flex-col items-start justify-start p-4">
                <Typography variant="h5" className="font-bold">
                    {company?.name}
                </Typography>
                <Typography variant="body1" className="mt-2">
                    {company?.description}
                </Typography>
            </Box>
        </Box>
    )
}

export default CompanyDetail;