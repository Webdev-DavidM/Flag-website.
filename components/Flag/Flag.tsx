'use client';

import { Card, Image, Text, Group, Stack, Box } from '@mantine/core';
import React from 'react';
import { Flag as FlagType } from '@/types';
import styles from './Flag.module.css';

type FlagProps = {
  flag: FlagType;
};

function Flag({ flag }: FlagProps) {
  return (
    <Box className={styles.container}>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        style={{
          maxWidth: 400,
          margin: 'auto',
          marginTop: 50,
        }}
      >
        <Card.Section>
          <Image src={flag.flag} height={160} alt={flag.name} />
        </Card.Section>
        <Stack p="md">
          <Text size="lg" fw={700}>
            {flag.name}
          </Text>
          <Group>
            <Text fw={500}>Population:</Text>
            <Text fw={500}>{flag.population.toLocaleString('en-US')}</Text>
          </Group>
          <Group>
            <Text fw={500}>Region:</Text>
            <Text fw={500}>{flag.region}</Text>
          </Group>
          <Group>
            <Text fw={500}>Capital:</Text>
            <Text fw={500}>{flag.capital}</Text>
          </Group>
        </Stack>
      </Card>
    </Box>
  );
}

export default Flag;
