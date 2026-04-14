"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-[#0D1F5C] mb-2">{title}</h2>
      <div className="text-sm leading-relaxed text-[#1A1410]">{children}</div>
    </div>
  );
}

export default function TermsContent() {
  const { lang } = useLanguage();
  const fr = lang === "fr";

  useEffect(() => {
    document.title = fr
      ? "Conditions générales d'utilisation | ShipDirect"
      : "Terms & Conditions | ShipDirect";
  }, [fr]);

  return (
    <main className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-[#EEF1F8] text-[#0D1F5C] rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            {fr ? "Mentions légales" : "Legal"}
          </div>
          <h1 className="text-4xl font-extrabold text-[#0D1F5C] mb-3">
            {fr ? "Conditions générales" : "Terms & Conditions"}
          </h1>
          <p className="text-sm text-[#6B7280]">
            {fr ? "Dernière mise à jour : Janvier 2025" : "Last Updated: January 2025"}
          </p>
        </div>

        <div className="space-y-8 text-[#1A1410]">
          {fr ? (
            <>
              <Section title="1. Services">
                ShipDirect fournit des services d&apos;expédition personnelle B2C et une coordination d&apos;exportation en gros B2B du Canada vers le Sénégal. Les services sont soumis à la disponibilité et aux réglementations applicables.
              </Section>
              <Section title="2. Tarification et paiement">
                Tous les prix sont en dollars canadiens (CAD) et représentent l&apos;expédition aller simple du Canada vers le Sénégal. Les prix sont susceptibles de changer. Tous les frais supplémentaires vous seront communiqués à l&apos;avance. Le paiement intégral est requis avant que les marchandises soient acceptées.
              </Section>
              <Section title="3. Articles interdits">
                ShipDirect n&apos;expédie pas de substances illégales, d&apos;armes, de marchandises contrefaites, de denrées périssables non approuvées, ni tout article interdit par la loi. Il vous incombe de vous assurer que toutes les marchandises sont conformes aux réglementations applicables. ShipDirect se réserve le droit de refuser tout envoi.
              </Section>
              <Section title="4. Douane, droits et frais portuaires">
                Nos prix couvrent uniquement le transport du Canada vers le Sénégal. Les droits de douane, taxes à l&apos;importation, frais de manutention portuaire et tous autres frais perçus au Sénégal sont à la charge exclusive du destinataire.
              </Section>
              <Section title="5. Limites de responsabilité">
                ShipDirect n&apos;est pas responsable des pertes, dommages ou retards causés par des facteurs hors de notre contrôle raisonnable. Notre responsabilité pour toute réclamation est limitée aux frais d&apos;expédition payés pour cet envoi. Les clients avec des marchandises de grande valeur sont encouragés à souscrire une assurance cargo indépendante.
              </Section>
              <Section title="6. Ramassage et dépôt">
                Les clients sont responsables de la livraison des marchandises à notre point de dépôt d&apos;Ottawa (adresse fournie à la confirmation), à moins qu&apos;un ramassage payant n&apos;ait été organisé à l&apos;avance. Les services de ramassage sont soumis à disponibilité et entraîneront un supplément selon la distance.
              </Section>
              <Section title="7. Livraison au Sénégal">
                La livraison standard est la collecte à notre établissement de Keur Massar sans frais supplémentaires. La livraison locale au Sénégal est disponible pour un supplément, organisée à l&apos;avance. ShipDirect n&apos;est pas responsable des retards causés par un destinataire ne récupérant pas son envoi.
              </Section>
              <Section title="8. Conditions B2B">
                Les commandes commerciales et en gros sont régies par des accords écrits distincts entre ShipDirect et le client. La responsabilité de ShipDirect prend fin au port désigné au Sénégal.
              </Section>
              <Section title="9. Annulations et remboursements">
                Les annulations peuvent ne pas être possibles une fois qu&apos;un envoi a commencé à être traité. Les remboursements sont évalués au cas par cas. Aucun remboursement pour les envois déjà partis.
              </Section>
              <Section title="10. Droit applicable">
                Ces Conditions générales sont régies par les lois de la Province d&apos;Ontario, Canada.
              </Section>
              <Section title="11. Modifications des conditions">
                ShipDirect peut mettre à jour ces Conditions générales à tout moment. Les conditions mises à jour seront publiées sur cette page.
              </Section>
              <Section title="12. Nous contacter">
                Pour toute question sur ces Conditions générales :
                <div className="mt-3 bg-[#EEF1F8] rounded-xl p-5">
                  <p className="font-semibold text-[#0D1F5C]">ShipDirect</p>
                  <p>Point de dépôt Ottawa (Fourni à la confirmation)</p>
                  <p><a href="mailto:info@shipdirect.ca" className="text-[#D42B2B] hover:underline">info@shipdirect.ca</a></p>
                  <p><a href="tel:6137002747" className="text-[#D42B2B] hover:underline">613-700-2747</a></p>
                </div>
              </Section>
            </>
          ) : (
            <>
              <Section title="1. Services">
                ShipDirect provides B2C personal shipping services and B2B wholesale export coordination from Canada to Senegal. Services are subject to availability and applicable Canadian export and Senegalese import regulations.
              </Section>
              <Section title="2. Pricing and Payment">
                All prices are quoted in Canadian dollars (CAD) and represent one-way shipping from Canada to Senegal. Prices are subject to change. Any additional charges (pickup, local delivery, oversized items) will be communicated to you in advance. Full payment is required before goods are accepted for shipping.
              </Section>
              <Section title="3. Prohibited Items">
                ShipDirect does not ship illegal substances, weapons, counterfeit goods, unapproved perishables, or any items prohibited under Canadian export law or Senegalese import law. It is your responsibility to ensure all goods comply with applicable regulations. ShipDirect reserves the right to refuse any shipment at its sole discretion.
              </Section>
              <Section title="4. Customs, Duties, and Port Fees">
                Our listed prices cover transportation from Canada to Senegal only. Customs duties, import taxes, port handling fees, and any other charges levied in Senegal are the sole responsibility of the recipient.
              </Section>
              <Section title="5. Liability Limitations">
                ShipDirect is not liable for loss, damage, or delay caused by factors outside our reasonable control. Our liability for any claim is limited to the shipping fee paid by the customer for that specific shipment. Customers with high-value goods are encouraged to obtain independent cargo insurance.
              </Section>
              <Section title="6. Pickup and Drop-off">
                Customers are responsible for delivering goods to our Ottawa drop-off location (address provided upon confirmation), unless a paid pickup has been arranged in advance. Pickup services are subject to availability and will incur an additional charge based on distance.
              </Section>
              <Section title="7. Delivery in Senegal">
                Standard delivery is collection by the recipient at our Keur Massar, Senegal facility at no additional charge. Local delivery within Senegal is available for an additional fee, arranged in advance.
              </Section>
              <Section title="8. B2B Terms">
                Commercial and wholesale orders are governed by separate written agreements between ShipDirect and the client. ShipDirect&apos;s responsibility ends at the designated port in Senegal.
              </Section>
              <Section title="9. Cancellations and Refunds">
                Cancellations may not be possible once a shipment has entered processing. Refunds are evaluated on a case-by-case basis. No refunds will be issued for shipments that have already departed.
              </Section>
              <Section title="10. Governing Law">
                These Terms & Conditions are governed by and construed in accordance with the laws of the Province of Ontario, Canada.
              </Section>
              <Section title="11. Changes to Terms">
                ShipDirect may update these Terms & Conditions at any time. Updated terms will be posted on this page with a revised effective date.
              </Section>
              <Section title="12. Contact Us">
                For questions about these Terms & Conditions:
                <div className="mt-3 bg-[#EEF1F8] rounded-xl p-5">
                  <p className="font-semibold text-[#0D1F5C]">ShipDirect</p>
                  <p>Ottawa Drop-off Location (Provided upon confirmation)</p>
                  <p><a href="mailto:info@shipdirect.ca" className="text-[#D42B2B] hover:underline">info@shipdirect.ca</a></p>
                  <p><a href="tel:6137002747" className="text-[#D42B2B] hover:underline">613-700-2747</a></p>
                </div>
              </Section>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
