import React from 'react';
import { useRouter } from 'next/router';
import { Button, Box } from '@chakra-ui/react';
import styles from './empty.module.scss';
import MyIcon from '@/components/Icon';
import { useTranslation } from 'next-i18next';

const Empty = () => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <Box
      className={styles.empty}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg={'#F3F4F5'}
    >
      <MyIcon name={'noEvents'} color={'transparent'} width={'80px'} height={'80px'} />
      <Box py={8}>{t("You haven't created any application yet.")}</Box>
      <Button
        w={155}
        mt={5}
        variant={'primary'}
        leftIcon={<MyIcon name="plus" />}
        onClick={() => router.push('/app/edit')}
      >
        {t('Create Application')}
      </Button>
    </Box>
  );
};

export default Empty;
