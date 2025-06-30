import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          tokens_available: number | null;
          created_at: string;
        };
        Insert: {
          id: string;
          tokens_available?: number | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          tokens_available?: number | null;
          created_at?: string;
        };
      };
      boards: {
        Row: {
          id: string;
          title: string;
          description: string;
          slug: string;
          category: string;
          tags: string[];
          is_featured: boolean;
          member_count: number;
          post_count: number;
          created_by: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          slug: string;
          category: string;
          tags?: string[];
          is_featured?: boolean;
          member_count?: number;
          post_count?: number;
          created_by: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          slug?: string;
          category?: string;
          tags?: string[];
          is_featured?: boolean;
          member_count?: number;
          post_count?: number;
          created_by?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      posts: {
        Row: {
          id: string;
          board_id: string;
          title: string;
          content: string;
          type: 'discussion' | 'question' | 'tutorial' | 'resource';
          tags: string[];
          upvotes: number;
          reply_count: number;
          is_pinned: boolean;
          is_solved: boolean;
          ai_summary: string | null;
          ai_tags: string[];
          created_by: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          board_id: string;
          title: string;
          content: string;
          type?: 'discussion' | 'question' | 'tutorial' | 'resource';
          tags?: string[];
          upvotes?: number;
          reply_count?: number;
          is_pinned?: boolean;
          is_solved?: boolean;
          ai_summary?: string | null;
          ai_tags?: string[];
          created_by: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          board_id?: string;
          title?: string;
          content?: string;
          type?: 'discussion' | 'question' | 'tutorial' | 'resource';
          tags?: string[];
          upvotes?: number;
          reply_count?: number;
          is_pinned?: boolean;
          is_solved?: boolean;
          ai_summary?: string | null;
          ai_tags?: string[];
          created_by?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      replies: {
        Row: {
          id: string;
          post_id: string;
          content: string;
          upvotes: number;
          is_solution: boolean;
          parent_id: string | null;
          created_by: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          post_id: string;
          content: string;
          upvotes?: number;
          is_solution?: boolean;
          parent_id?: string | null;
          created_by: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          post_id?: string;
          content?: string;
          upvotes?: number;
          is_solution?: boolean;
          parent_id?: string | null;
          created_by?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};