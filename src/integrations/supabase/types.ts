export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      activity_log: {
        Row: {
          action: string
          company_id: string | null
          created_at: string
          details: Json
          id: string
          user_id: string | null
        }
        Insert: {
          action: string
          company_id?: string | null
          created_at?: string
          details?: Json
          id?: string
          user_id?: string | null
        }
        Update: {
          action?: string
          company_id?: string | null
          created_at?: string
          details?: Json
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "activity_log_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      automation_jobs: {
        Row: {
          attempts: number
          company_id: string
          created_at: string
          error: string | null
          finished_at: string | null
          id: string
          job_type: string
          payload: Json
          result: Json | null
          run_after: string
          started_at: string | null
          status: string
          updated_at: string
        }
        Insert: {
          attempts?: number
          company_id: string
          created_at?: string
          error?: string | null
          finished_at?: string | null
          id?: string
          job_type: string
          payload?: Json
          result?: Json | null
          run_after?: string
          started_at?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          attempts?: number
          company_id?: string
          created_at?: string
          error?: string | null
          finished_at?: string | null
          id?: string
          job_type?: string
          payload?: Json
          result?: Json | null
          run_after?: string
          started_at?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "automation_jobs_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      billing_audit_log: {
        Row: {
          action: string
          actor_id: string | null
          actor_type: string
          after: Json | null
          before: Json | null
          company_id: string | null
          created_at: string
          entity: string
          entity_id: string | null
          id: string
        }
        Insert: {
          action: string
          actor_id?: string | null
          actor_type?: string
          after?: Json | null
          before?: Json | null
          company_id?: string | null
          created_at?: string
          entity: string
          entity_id?: string | null
          id?: string
        }
        Update: {
          action?: string
          actor_id?: string | null
          actor_type?: string
          after?: Json | null
          before?: Json | null
          company_id?: string | null
          created_at?: string
          entity?: string
          entity_id?: string | null
          id?: string
        }
        Relationships: []
      }
      billing_payments: {
        Row: {
          asaas_payment_id: string
          asaas_subscription_id: string | null
          bank_slip_url: string | null
          billing_type: string | null
          company_id: string
          created_at: string
          credits_granted: number
          due_date: string | null
          environment: string
          id: string
          invoice_url: string | null
          net_value_cents: number | null
          paid_at: string | null
          refunded_at: string | null
          status: string
          subscription_id: string | null
          updated_at: string
          validation_error: string | null
          value_cents: number
        }
        Insert: {
          asaas_payment_id: string
          asaas_subscription_id?: string | null
          bank_slip_url?: string | null
          billing_type?: string | null
          company_id: string
          created_at?: string
          credits_granted?: number
          due_date?: string | null
          environment?: string
          id?: string
          invoice_url?: string | null
          net_value_cents?: number | null
          paid_at?: string | null
          refunded_at?: string | null
          status: string
          subscription_id?: string | null
          updated_at?: string
          validation_error?: string | null
          value_cents: number
        }
        Update: {
          asaas_payment_id?: string
          asaas_subscription_id?: string | null
          bank_slip_url?: string | null
          billing_type?: string | null
          company_id?: string
          created_at?: string
          credits_granted?: number
          due_date?: string | null
          environment?: string
          id?: string
          invoice_url?: string | null
          net_value_cents?: number | null
          paid_at?: string | null
          refunded_at?: string | null
          status?: string
          subscription_id?: string | null
          updated_at?: string
          validation_error?: string | null
          value_cents?: number
        }
        Relationships: [
          {
            foreignKeyName: "billing_payments_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "billing_payments_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      billing_webhook_events: {
        Row: {
          created_at: string
          error: string | null
          event_id: string
          event_type: string
          id: string
          payload: Json
          processed_at: string | null
          provider: string
          status: string
        }
        Insert: {
          created_at?: string
          error?: string | null
          event_id: string
          event_type: string
          id?: string
          payload: Json
          processed_at?: string | null
          provider?: string
          status?: string
        }
        Update: {
          created_at?: string
          error?: string | null
          event_id?: string
          event_type?: string
          id?: string
          payload?: Json
          processed_at?: string | null
          provider?: string
          status?: string
        }
        Relationships: []
      }
      companies: {
        Row: {
          asaas_customer_id: string | null
          billing_document: string | null
          brand_colors: string[]
          communication_preferences: string | null
          created_at: string
          description: string | null
          differentials: string | null
          id: string
          logo_url: string | null
          name: string
          owner_id: string
          products_services: string | null
          publishing_mode: string
          segment: string | null
          site_analysis: Json | null
          social_links: Json
          status: string
          target_audience: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          asaas_customer_id?: string | null
          billing_document?: string | null
          brand_colors?: string[]
          communication_preferences?: string | null
          created_at?: string
          description?: string | null
          differentials?: string | null
          id?: string
          logo_url?: string | null
          name: string
          owner_id: string
          products_services?: string | null
          publishing_mode?: string
          segment?: string | null
          site_analysis?: Json | null
          social_links?: Json
          status?: string
          target_audience?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          asaas_customer_id?: string | null
          billing_document?: string | null
          brand_colors?: string[]
          communication_preferences?: string | null
          created_at?: string
          description?: string | null
          differentials?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          owner_id?: string
          products_services?: string | null
          publishing_mode?: string
          segment?: string | null
          site_analysis?: Json | null
          social_links?: Json
          status?: string
          target_audience?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      contact_requests: {
        Row: {
          budget: string | null
          company: string | null
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          phone: string | null
        }
        Insert: {
          budget?: string | null
          company?: string | null
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          phone?: string | null
        }
        Update: {
          budget?: string | null
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      contents: {
        Row: {
          approved_at: string | null
          caption: string | null
          company_id: string
          created_at: string
          due_at: string | null
          editorial_item_id: string | null
          file_url: string | null
          format: string
          hashtags: string[]
          id: string
          network: string | null
          preview_url: string | null
          published_at: string | null
          published_url: string | null
          status: string
          title: string | null
          updated_at: string
          version: number
          versions: Json
        }
        Insert: {
          approved_at?: string | null
          caption?: string | null
          company_id: string
          created_at?: string
          due_at?: string | null
          editorial_item_id?: string | null
          file_url?: string | null
          format: string
          hashtags?: string[]
          id?: string
          network?: string | null
          preview_url?: string | null
          published_at?: string | null
          published_url?: string | null
          status?: string
          title?: string | null
          updated_at?: string
          version?: number
          versions?: Json
        }
        Update: {
          approved_at?: string | null
          caption?: string | null
          company_id?: string
          created_at?: string
          due_at?: string | null
          editorial_item_id?: string | null
          file_url?: string | null
          format?: string
          hashtags?: string[]
          id?: string
          network?: string | null
          preview_url?: string | null
          published_at?: string | null
          published_url?: string | null
          status?: string
          title?: string | null
          updated_at?: string
          version?: number
          versions?: Json
        }
        Relationships: [
          {
            foreignKeyName: "contents_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contents_editorial_item_id_fkey"
            columns: ["editorial_item_id"]
            isOneToOne: false
            referencedRelation: "editorial_items"
            referencedColumns: ["id"]
          },
        ]
      }
      credit_ledger: {
        Row: {
          amount: number
          company_id: string
          created_at: string
          id: string
          reason: string
          reference_id: string | null
        }
        Insert: {
          amount: number
          company_id: string
          created_at?: string
          id?: string
          reason: string
          reference_id?: string | null
        }
        Update: {
          amount?: number
          company_id?: string
          created_at?: string
          id?: string
          reason?: string
          reference_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "credit_ledger_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      editorial_items: {
        Row: {
          caption: string | null
          company_id: string
          created_at: string
          cta: string | null
          format: string
          hashtags: string[]
          id: string
          network: string | null
          objective: string | null
          pillar: string | null
          plan_month: string
          scheduled_for: string | null
          script: string | null
          status: string
          theme: string
          updated_at: string
        }
        Insert: {
          caption?: string | null
          company_id: string
          created_at?: string
          cta?: string | null
          format: string
          hashtags?: string[]
          id?: string
          network?: string | null
          objective?: string | null
          pillar?: string | null
          plan_month: string
          scheduled_for?: string | null
          script?: string | null
          status?: string
          theme: string
          updated_at?: string
        }
        Update: {
          caption?: string | null
          company_id?: string
          created_at?: string
          cta?: string | null
          format?: string
          hashtags?: string[]
          id?: string
          network?: string | null
          objective?: string | null
          pillar?: string | null
          plan_month?: string
          scheduled_for?: string | null
          script?: string | null
          status?: string
          theme?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "editorial_items_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          addons_total: number | null
          created_at: string
          customer_company: string | null
          customer_email: string
          customer_name: string
          customer_phone: string
          duration_months: number
          id: string
          package_name: string
          package_price: number
          payment_method: string
          payment_status: string
          selected_addons: Json | null
          stripe_payment_intent_id: string | null
          stripe_session_id: string | null
          total_amount: number
          updated_at: string
        }
        Insert: {
          addons_total?: number | null
          created_at?: string
          customer_company?: string | null
          customer_email: string
          customer_name: string
          customer_phone: string
          duration_months?: number
          id?: string
          package_name: string
          package_price: number
          payment_method: string
          payment_status?: string
          selected_addons?: Json | null
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          total_amount: number
          updated_at?: string
        }
        Update: {
          addons_total?: number | null
          created_at?: string
          customer_company?: string | null
          customer_email?: string
          customer_name?: string
          customer_phone?: string
          duration_months?: number
          id?: string
          package_name?: string
          package_price?: number
          payment_method?: string
          payment_status?: string
          selected_addons?: Json | null
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          total_amount?: number
          updated_at?: string
        }
        Relationships: []
      }
      plans: {
        Row: {
          allowed_networks: string[]
          created_at: string
          currency: string
          description: string | null
          features: Json
          generation_limit: number
          id: string
          is_active: boolean
          monthly_carousels: number
          monthly_credits: number
          monthly_static: number
          monthly_videos: number
          name: string
          posts_per_week: number
          price_cents: number
          slug: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          allowed_networks?: string[]
          created_at?: string
          currency?: string
          description?: string | null
          features?: Json
          generation_limit?: number
          id?: string
          is_active?: boolean
          monthly_carousels?: number
          monthly_credits?: number
          monthly_static?: number
          monthly_videos?: number
          name: string
          posts_per_week?: number
          price_cents?: number
          slug: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          allowed_networks?: string[]
          created_at?: string
          currency?: string
          description?: string | null
          features?: Json
          generation_limit?: number
          id?: string
          is_active?: boolean
          monthly_carousels?: number
          monthly_credits?: number
          monthly_static?: number
          monthly_videos?: number
          name?: string
          posts_per_week?: number
          price_cents?: number
          slug?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      social_accounts: {
        Row: {
          account_name: string | null
          company_id: string
          connected_at: string | null
          created_at: string
          external_account_id: string | null
          id: string
          last_error: string | null
          platform: string
          status: string
          updated_at: string
        }
        Insert: {
          account_name?: string | null
          company_id: string
          connected_at?: string | null
          created_at?: string
          external_account_id?: string | null
          id?: string
          last_error?: string | null
          platform: string
          status?: string
          updated_at?: string
        }
        Update: {
          account_name?: string | null
          company_id?: string
          connected_at?: string | null
          created_at?: string
          external_account_id?: string | null
          id?: string
          last_error?: string | null
          platform?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "social_accounts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_changes: {
        Row: {
          applied_at: string | null
          authorized_at: string | null
          authorized_by: string | null
          company_id: string
          created_at: string
          customer_response_at: string | null
          customer_response_by: string | null
          effective_date: string
          id: string
          new_limits: Json | null
          new_price_cents: number | null
          notified_at: string | null
          old_limits: Json | null
          old_price_cents: number | null
          reason: string
          requested_by: string
          status: string
          subscription_id: string
          updated_at: string
        }
        Insert: {
          applied_at?: string | null
          authorized_at?: string | null
          authorized_by?: string | null
          company_id: string
          created_at?: string
          customer_response_at?: string | null
          customer_response_by?: string | null
          effective_date: string
          id?: string
          new_limits?: Json | null
          new_price_cents?: number | null
          notified_at?: string | null
          old_limits?: Json | null
          old_price_cents?: number | null
          reason: string
          requested_by: string
          status?: string
          subscription_id: string
          updated_at?: string
        }
        Update: {
          applied_at?: string | null
          authorized_at?: string | null
          authorized_by?: string | null
          company_id?: string
          created_at?: string
          customer_response_at?: string | null
          customer_response_by?: string | null
          effective_date?: string
          id?: string
          new_limits?: Json | null
          new_price_cents?: number | null
          notified_at?: string | null
          old_limits?: Json | null
          old_price_cents?: number | null
          reason?: string
          requested_by?: string
          status?: string
          subscription_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscription_changes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_changes_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          billing_type: string | null
          cancel_at_period_end: boolean
          canceled_at: string | null
          company_id: string
          contracted_limits: Json
          created_at: string
          currency: string
          current_period_end: string | null
          current_period_start: string | null
          environment: string
          id: string
          last_payment_at: string | null
          next_due_date: string | null
          plan_id: string | null
          price_cents: number | null
          provider: string | null
          provider_subscription_id: string | null
          status: string
          updated_at: string
        }
        Insert: {
          billing_type?: string | null
          cancel_at_period_end?: boolean
          canceled_at?: string | null
          company_id: string
          contracted_limits?: Json
          created_at?: string
          currency?: string
          current_period_end?: string | null
          current_period_start?: string | null
          environment?: string
          id?: string
          last_payment_at?: string | null
          next_due_date?: string | null
          plan_id?: string | null
          price_cents?: number | null
          provider?: string | null
          provider_subscription_id?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          billing_type?: string | null
          cancel_at_period_end?: boolean
          canceled_at?: string | null
          company_id?: string
          contracted_limits?: Json
          created_at?: string
          currency?: string
          current_period_end?: string | null
          current_period_start?: string | null
          environment?: string
          id?: string
          last_payment_at?: string | null
          next_due_date?: string | null
          plan_id?: string | null
          price_cents?: number | null
          provider?: string | null
          provider_subscription_id?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      company_has_active_access: {
        Args: { _company: string }
        Returns: boolean
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      owns_company: { Args: { _company: string }; Returns: boolean }
      respond_subscription_change: {
        Args: { _accept: boolean; _change: string }
        Returns: undefined
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
