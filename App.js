import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, Alert } from 'react-native';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const medicines = [
    { id: '1', name: 'بنادول أدڤانس (Panadol)', type: 'مسكن آلام', location: 'الغيضة - حي الروضة', status: 'متوفر' },
    { id: '2', name: 'أوميبرازول (Omeprazole)', type: 'علاج المعدة', location: 'الغيضة - قرب المستشفى', status: 'متوفر' },
    { id: '3', name: 'أملوديبين (Amlodipine)', type: 'ضغط الدم', location: 'شحوح', status: 'متوفر' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#006666" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>دواء الخير</Text>
        <Text style={styles.headerSubtitle}>الأول في المهرة | لنشر وتبرع الأدوية</Text>
      </View>

      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="ابحث عن اسم الدواء المطلوب..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>الأدوية المتاحة للتبرع</Text>
        
        {medicines.map((med) => (
          <View key={med.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.medName}>{med.name}</Text>
              <Text style={styles.badge}>{med.status}</Text>
            </View>
            <Text style={styles.medType}>الفئة: {med.type}</Text>
            <Text style={styles.medLocation}>الموقع: {med.location}</Text>
            
            <TouchableOpacity 
              style={styles.contactButton} 
              onPress={() => Alert.alert('التواصل', 'سيتم فتح واتساب للتواصل مع المتبرع')}
            >
              <Text style={styles.buttonText}>طلب الدواء عبر واتساب</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => Alert.alert('إضافة تبرع', 'سيتم فتح شاشة إضافة دواء جديد')}
      >
        <Text style={styles.fabText}>+ أضف دواءً</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9' },
  header: { backgroundColor: '#006666', padding: 20, alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 },
  headerTitle: { fontSize: 26, fontWeight: 'bold', color: '#FFF' },
  headerSubtitle: { fontSize: 14, color: '#E0F2F1', marginTop: 4 },
  searchSection: { padding: 15 },
  searchInput: { backgroundColor: '#FFF', paddingHorizontal: 15, paddingVertical: 12, borderRadius: 10, borderWidth: 1, borderColor: '#DDD', textAlign: 'right', fontSize: 16 },
  content: { paddingHorizontal: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10, textAlign: 'right' },
  card: { backgroundColor: '#FFF', borderRadius: 10, padding: 15, marginBottom: 12, elevation: 2 },
  cardHeader: { flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center' },
  medName: { fontSize: 18, fontWeight: 'bold', color: '#006666' },
  badge: { backgroundColor: '#E8F5E9', color: '#2E7D32', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, fontSize: 12 },
  medType: { color: '#666', marginTop: 5, textAlign: 'right' },
  medLocation: { color: '#888', marginTop: 3, textAlign: 'right' },
  contactButton: { backgroundColor: '#006666', borderRadius: 8, paddingVertical: 10, marginTop: 12, alignItems: 'center' },
  buttonText: { color: '#FFF', fontWeight: 'bold' },
  fab: { position: 'absolute', bottom: 20, left: 20, backgroundColor: '#FF6F00', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 25, elevation: 5 },
  fabText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});
