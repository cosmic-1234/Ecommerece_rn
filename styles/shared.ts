
import { StyleSheet } from 'react-native';

export const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 24,
    color: '#333',
    textAlign: 'center',
  },
  error: {
    color: '#d9534f',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  link: {
    color: '#007bff',
    fontWeight: '600',
    marginTop: 16,
    textAlign: 'center',
  },
});
