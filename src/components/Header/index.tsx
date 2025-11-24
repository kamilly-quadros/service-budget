import Status from '../Status'
import { styles } from './styles'
import { COLORS } from '@/utils/theme'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import ChevronLeft from '../../assets/icons/ChevronLeft.svg'
import { quoteStorage, QuoteItem } from '@/storage/quoteStorage'

interface HeaderProps {
    id?: string
}
export default function Header({ id }: HeaderProps) {
    const navigation = useNavigation()
    const [quote, setQuote] = useState<QuoteItem | null>(null)
    useEffect(() => {
        async function loadQuote() {
            if (id) {
                const data = await quoteStorage.getById(id)
                setQuote(data)
            }
        }
        loadQuote()
    }, [id])
    return (
        <View style={styles.header}>
            <View style={styles.leftGroup}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ChevronLeft width={24} height={24} color={COLORS.gray600} />
                </TouchableOpacity>
                <Text style={styles.title}>{`Orçamento ${id ? `#${id}` : ''}`}</Text>
            </View>
            {quote && <Status mode={quote.status} />}
        </View>
    )
}

