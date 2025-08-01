import { HStack, VStack, Text } from '@chakra-ui/react';
import SysAdminPageContainer from '../../components/SysAdminPageContainer/SysAdminPageContainer';
import { Chart, useChart } from '@chakra-ui/charts';
import {
    CartesianGrid,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
const SysAdminHome = () => {
    const chart = useChart({
        data: [
            { Customers: 10, month: 'January' },
            { Customers: 95, month: 'February' },
            { Customers: 87, month: 'March' },
            { Customers: 88, month: 'May' },
            { Customers: 65, month: 'June' },
            { Customers: 90, month: 'August' },
        ],
        series: [{ name: 'Customers', color: 'teal.solid' }],
    });

    return (
        <SysAdminPageContainer>
            <HStack
                width={'100%'}
                height={'100%'}
                gap={'100px'}
                padding={'20px'}
            >
                <VStack flex={1} gap={'40px'}>
                    <Chart.Root maxH='md' chart={chart}>
                        <LineChart data={chart.data}>
                            <CartesianGrid
                                stroke={chart.color('border')}
                                vertical={false}
                            />
                            <XAxis
                                axisLine={false}
                                dataKey={chart.key('month')}
                                tickFormatter={(value) => value.slice(0, 3)}
                                stroke={chart.color('border')}
                                label={{ value: 'Month', position: 'bottom' }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tickMargin={10}
                                stroke={chart.color('border')}
                                label={{
                                    value: 'Customers',
                                    position: 'left',
                                    angle: -90,
                                }}
                            />
                            <Tooltip
                                animationDuration={100}
                                cursor={false}
                                content={<Chart.Tooltip />}
                            />
                            {chart.series.map((item) => (
                                <Line
                                    key={item.name}
                                    isAnimationActive={false}
                                    dataKey={chart.key(item.name)}
                                    stroke={chart.color(item.color)}
                                    strokeWidth={2}
                                    dot={false}
                                />
                            ))}
                        </LineChart>
                    </Chart.Root>
                    <Text fontSize={'24px'}>User Growth</Text>
                </VStack>
                <VStack flex={1} gap={'40px'}>
                    <Chart.Root maxH='md' chart={chart}>
                        <LineChart data={chart.data}>
                            <CartesianGrid
                                stroke={chart.color('border')}
                                vertical={false}
                            />
                            <XAxis
                                axisLine={false}
                                dataKey={chart.key('month')}
                                tickFormatter={(value) => value.slice(0, 3)}
                                stroke={chart.color('border')}
                                label={{ value: 'Month', position: 'bottom' }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tickMargin={10}
                                stroke={chart.color('border')}
                                label={{
                                    value: 'Customers',
                                    position: 'left',
                                    angle: -90,
                                }}
                            />
                            <Tooltip
                                animationDuration={100}
                                cursor={false}
                                content={<Chart.Tooltip />}
                            />
                            {chart.series.map((item) => (
                                <Line
                                    key={item.name}
                                    isAnimationActive={false}
                                    dataKey={chart.key(item.name)}
                                    stroke={chart.color(item.color)}
                                    strokeWidth={2}
                                    dot={false}
                                />
                            ))}
                        </LineChart>
                    </Chart.Root>
                    <Text fontSize={'24px'}>Futsal Growth</Text>
                </VStack>
            </HStack>
        </SysAdminPageContainer>
    );
};

export default SysAdminHome;
