'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Denkst du, du weißt{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            die Wahrheit?
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Teste deine Intuition an echten Daten. Jede Frage ist ein kleiner Aha-Moment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/challenge">
            <motion.button
              className="relative px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl font-bold rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 10px 40px -10px rgba(34, 197, 94, 0.3)',
                  '0 20px 60px -10px rgba(34, 197, 94, 0.5)',
                  '0 10px 40px -10px rgba(34, 197, 94, 0.3)',
                ],
              }}
              transition={{
                boxShadow: { repeat: Infinity, duration: 2 },
              }}
            >
              <motion.span
                className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 hover:opacity-20 transition-opacity"
                whileHover={{ scale: 1.1 }}
              />
              Start Challenge
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center gap-8 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div
            className="text-center"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0 }}
          >
            <div className="text-3xl font-bold text-white">5</div>
            <div className="text-sm">Fragen</div>
          </motion.div>
          <motion.div
            className="text-center"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
          >
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-sm">Aha-Momente</div>
          </motion.div>
          <motion.div
            className="text-center"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
          >
            <div className="text-3xl font-bold text-white">∞</div>
            <div className="text-sm">Überraschungen</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-500/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 5,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </main>
  );
}
