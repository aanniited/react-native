import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const showAlert = (title: string, message: string) => {
    if (Platform.OS === 'web') {
      window.alert(`${title}\n${message}`);
    } else {
      Alert.alert(title, message);
    }
  };

  const handleSignIn = () => {
    if (!email.trim() || !password.trim()) {
      showAlert('შეცდომა', 'შეავსეთ ელფოსტა და პაროლი');
      return;
    }
    showAlert('კეთილი იყოს თქვენი მობრძანება', `${email}`);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.wrapper}
      >
        <View style={styles.hero}>
          <Text style={styles.brand}>LinkedIn</Text>
          <Text style={styles.subtitle}>
            welcome to your professional community
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>sign in</Text>

          <TextInput
            style={styles.input}
            placeholder="ელფოსტა ან ტელეფონი"
            placeholderTextColor="#666666"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="პაროლი"
            placeholderTextColor="#666666"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.forgotBtn}
            onPress={() => showAlert('პაროლი', 'დაგავიწყდა პაროლი?')}
          >
            <Text style={styles.forgotText}>დაგავიწყდა პაროლი?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryBtn} onPress={handleSignIn}>
            <Text style={styles.primaryBtnText}>sign in</Text>
          </TouchableOpacity>

          <View style={styles.dividerRow}>
            <View style={styles.divider} />
            <Text style={styles.dividerLabel}>ან</Text>
            <View style={styles.divider} />
          </View>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => showAlert('Google', 'Google ანგარიშით შესვლა')}
          >
            <Text style={styles.secondaryBtnText}>გაგრძელება Google-ით</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>ახალი ხარ LinkedIn-ზე? </Text>
          <TouchableOpacity
            onPress={() => showAlert('რეგისტრაცია', 'ახალი პროფილის შექმნა')}
          >
            <Text style={styles.footerLink}>გაწევრიანდი</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f3f2ef',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    maxWidth: 440,
    width: '100%',
    alignSelf: 'center',
  },
  hero: {
    marginBottom: 20,
  },
  brand: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0a66c2',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    color: '#191919',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e0dfdc',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#191919',
    marginBottom: 16,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#8c8c8c',
    borderRadius: 6,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#191919',
    backgroundColor: '#ffffff',
    marginBottom: 12,
  },
  forgotBtn: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  forgotText: {
    color: '#0a66c2',
    fontSize: 14,
    fontWeight: '600',
  },
  primaryBtn: {
    height: 48,
    borderRadius: 24,
    backgroundColor: '#0a66c2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryBtnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0dfdc',
  },
  dividerLabel: {
    marginHorizontal: 12,
    fontSize: 13,
    color: '#666666',
  },
  secondaryBtn: {
    height: 46,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#191919',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryBtnText: {
    color: '#191919',
    fontSize: 15,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#191919',
  },
  footerLink: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0a66c2',
  },
});